import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function DNAHelix() {
  const mountRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const mat1 = new THREE.MeshPhongMaterial({ color: 0x166534, shininess: 80 })
    const mat2 = new THREE.MeshPhongMaterial({ color: 0x22c55e, shininess: 80 })
    const matBP = new THREE.MeshPhongMaterial({ color: 0x86efac, transparent: true, opacity: 0.65, shininess: 30 })
    const matNode1 = new THREE.MeshPhongMaterial({ color: 0x14532d, shininess: 60 })
    const matNode2 = new THREE.MeshPhongMaterial({ color: 0x4ade80, shininess: 60 })

    const turns = 3.5
    const R = 1.2
    const totalH = 6.5
    const segments = 220

    const pts1 = [], pts2 = []
    for (let i = 0; i <= segments; i++) {
      const frac = i / segments
      const angle = frac * turns * Math.PI * 2
      const y = frac * totalH - totalH / 2
      pts1.push(new THREE.Vector3(Math.cos(angle) * R, y, Math.sin(angle) * R))
      pts2.push(new THREE.Vector3(Math.cos(angle + Math.PI) * R, y, Math.sin(angle + Math.PI) * R))
    }

    const c1 = new THREE.CatmullRomCurve3(pts1)
    const c2 = new THREE.CatmullRomCurve3(pts2)

    group.add(new THREE.Mesh(new THREE.TubeGeometry(c1, segments, 0.065, 8, false), mat1))
    group.add(new THREE.Mesh(new THREE.TubeGeometry(c2, segments, 0.065, 8, false), mat2))

    const bpCount = Math.round(turns * 10)
    const sphereGeo = new THREE.SphereGeometry(0.1, 10, 10)

    for (let i = 0; i <= bpCount; i++) {
      const frac = i / bpCount
      const angle = frac * turns * Math.PI * 2
      const y = frac * totalH - totalH / 2

      const p1 = new THREE.Vector3(Math.cos(angle) * R, y, Math.sin(angle) * R)
      const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * R, y, Math.sin(angle + Math.PI) * R)

      const s1 = new THREE.Mesh(sphereGeo, matNode1)
      s1.position.copy(p1)
      group.add(s1)

      const s2 = new THREE.Mesh(sphereGeo, matNode2)
      s2.position.copy(p2)
      group.add(s2)

      const dist = p1.distanceTo(p2)
      const bpMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.026, 0.026, dist, 6),
        matBP
      )
      bpMesh.position.copy(p1.clone().lerp(p2, 0.5))
      bpMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        p2.clone().sub(p1).normalize()
      )
      group.add(bpMesh)
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const d1 = new THREE.DirectionalLight(0xffffff, 0.9)
    d1.position.set(5, 8, 5)
    scene.add(d1)
    const d2 = new THREE.DirectionalLight(0xf0fdf4, 0.4)
    d2.position.set(-4, -3, 3)
    scene.add(d2)

    const setSize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    setSize()

    let raf
    const clock = new THREE.Clock()
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.38
      group.position.y = Math.sin(t * 0.5) * 0.1
      renderer.render(scene, camera)
    }
    tick()

    const ro = new ResizeObserver(setSize)
    ro.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}

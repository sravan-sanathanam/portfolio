import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function DnaHelix() {
  const mountRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const W = el.clientWidth || 420
    const H = el.clientHeight || 600

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 200)
    camera.position.set(0, 0, 26)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    // Lighting
    scene.add(new THREE.AmbientLight(0x001a2e, 1.5))
    const light1 = new THREE.PointLight(0x22d3ee, 5, 50)
    light1.position.set(7, 10, 8)
    scene.add(light1)
    const light2 = new THREE.PointLight(0x14b8a6, 4, 45)
    light2.position.set(-8, -7, 5)
    scene.add(light2)
    const light3 = new THREE.PointLight(0x0891b2, 3, 40)
    light3.position.set(0, 0, 12)
    scene.add(light3)

    // Materials - strand 1: cyan, strand 2: teal
    const matS1 = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0891b2,
      emissiveIntensity: 0.55,
      metalness: 0.4,
      roughness: 0.35,
    })
    const matS2 = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      emissive: 0x0d9488,
      emissiveIntensity: 0.5,
      metalness: 0.4,
      roughness: 0.35,
    })
    // Base pairs: AT (light) and GC (teal-light)
    const matBP1 = new THREE.MeshStandardMaterial({
      color: 0xa5f3fc,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.88,
      metalness: 0.1,
      roughness: 0.55,
    })
    const matBP2 = new THREE.MeshStandardMaterial({
      color: 0x99f6e4,
      emissive: 0x14b8a6,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.88,
      metalness: 0.1,
      roughness: 0.55,
    })
    // Glow halos
    const matHalo = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    })

    const TURNS = 3.5
    const STEPS = 42
    const R = 3.0
    const HEIGHT = 16
    const DY = HEIGHT / STEPS

    function mkCylinder(from, to, r, mat) {
      const dir = to.clone().sub(from)
      const len = dir.length()
      const geo = new THREE.CylinderGeometry(r, r, len, 7)
      const m = new THREE.Mesh(geo, mat)
      m.position.copy(from.clone().add(to).multiplyScalar(0.5))
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize())
      return m
    }

    const group = new THREE.Group()
    scene.add(group)

    const nodeGeo = new THREE.SphereGeometry(0.28, 12, 8)
    const haloGeo = new THREE.SphereGeometry(0.52, 10, 7)

    const pts1 = [], pts2 = []
    for (let i = 0; i <= STEPS; i++) {
      const angle = (i / STEPS) * TURNS * Math.PI * 2
      const y = i * DY - HEIGHT / 2
      pts1.push(new THREE.Vector3(R * Math.cos(angle), y, R * Math.sin(angle)))
      pts2.push(new THREE.Vector3(R * Math.cos(angle + Math.PI), y, R * Math.sin(angle + Math.PI)))
    }

    // Strand 1
    for (let i = 0; i <= STEPS; i++) {
      const s = new THREE.Mesh(nodeGeo, matS1)
      s.position.copy(pts1[i])
      group.add(s)
      const h = new THREE.Mesh(haloGeo, matHalo)
      h.position.copy(pts1[i])
      group.add(h)
      if (i < STEPS) group.add(mkCylinder(pts1[i], pts1[i + 1], 0.1, matS1))
    }

    // Strand 2
    for (let i = 0; i <= STEPS; i++) {
      const s = new THREE.Mesh(nodeGeo, matS2)
      s.position.copy(pts2[i])
      group.add(s)
      const h = new THREE.Mesh(haloGeo, matHalo)
      h.position.copy(pts2[i])
      group.add(h)
      if (i < STEPS) group.add(mkCylinder(pts2[i], pts2[i + 1], 0.1, matS2))
    }

    // Base pairs (every 3 steps)
    for (let i = 0; i <= STEPS; i += 3) {
      const mat = Math.floor(i / 3) % 2 === 0 ? matBP1 : matBP2
      group.add(mkCylinder(pts1[i], pts2[i], 0.09, mat))
      // End-cap spheres on base pairs
      const capGeo = new THREE.SphereGeometry(0.14, 8, 6)
      const cap1 = new THREE.Mesh(capGeo, mat)
      cap1.position.copy(pts1[i])
      group.add(cap1)
      const cap2 = new THREE.Mesh(capGeo, mat)
      cap2.position.copy(pts2[i])
      group.add(cap2)
    }

    const mouse = { x: 0, y: 0 }
    const onMouse = e => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    const onResize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (!w || !h) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let frame, tick = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      tick += 0.005
      group.rotation.y = tick
      group.rotation.x += (mouse.y * 0.13 - group.rotation.x) * 0.04
      group.rotation.z += (-mouse.x * 0.09 - group.rotation.z) * 0.04
      light1.intensity = 5 + Math.sin(tick * 1.8) * 1.2
      light2.intensity = 4 + Math.sin(tick * 1.4 + 1) * 0.8
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      ;[nodeGeo, haloGeo].forEach(g => g.dispose())
      ;[matS1, matS2, matBP1, matBP2, matHalo].forEach(m => m.dispose())
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}

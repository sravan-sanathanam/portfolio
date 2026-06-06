import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const W = window.innerWidth
    const H = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 55

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x020c10, 1)
    mount.appendChild(renderer.domElement)

    const COUNT = 5000
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)

    const c1 = new THREE.Color('#06b6d4')
    const c2 = new THREE.Color('#0e7490')
    const c3 = new THREE.Color('#a5f3fc')

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 220
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120

      const r = Math.random()
      const col = r < 0.5
        ? c1.clone().lerp(c2, r * 2)
        : c1.clone().lerp(c3, (r - 0.5) * 2)

      colors[i * 3]     = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    const mouse = { x: 0, y: 0 }
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let frame
    let tick = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      tick += 0.0004
      particles.rotation.y = tick * 0.25
      particles.rotation.x = tick * 0.08
      camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.018
      camera.position.y += (mouse.y * 2.5 - camera.position.y) * 0.018
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}

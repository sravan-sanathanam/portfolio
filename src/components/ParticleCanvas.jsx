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

    // ── Galaxy spiral distribution ──────────────────────────────────────────
    const TOTAL = 6000
    const positions = new Float32Array(TOTAL * 3)
    const colors    = new Float32Array(TOTAL * 3)
    const sizes     = new Float32Array(TOTAL)

    const c1 = new THREE.Color('#06b6d4')  // cyan
    const c2 = new THREE.Color('#0e7490')  // mid teal
    const c3 = new THREE.Color('#a5f3fc')  // light cyan
    const c4 = new THREE.Color('#2dd4bf')  // teal

    const ARMS = 2
    const SPIRAL_TIGHTNESS = 0.45
    const SPREAD = 0.28

    for (let i = 0; i < TOTAL; i++) {
      let x, y, z
      const r = Math.random()

      if (r < 0.60) {
        // Spiral arm particles
        const arm = Math.floor(Math.random() * ARMS)
        const armAngle = (arm / ARMS) * Math.PI * 2
        const dist = Math.pow(Math.random(), 0.55) * 100
        const angle = armAngle + dist * SPIRAL_TIGHTNESS
        const scatter = (Math.random() - 0.5) * dist * SPREAD
        x = Math.cos(angle) * dist + scatter
        y = (Math.random() - 0.5) * 30
        z = Math.sin(angle) * dist + scatter
      } else if (r < 0.80) {
        // Dense core cluster
        const theta = Math.random() * Math.PI * 2
        const phi   = Math.acos(2 * Math.random() - 1)
        const dist  = Math.pow(Math.random(), 2) * 25
        x = dist * Math.sin(phi) * Math.cos(theta)
        y = dist * Math.sin(phi) * Math.sin(theta) * 0.4
        z = dist * Math.cos(phi)
      } else {
        // Random haze
        x = (Math.random() - 0.5) * 250
        y = (Math.random() - 0.5) * 200
        z = (Math.random() - 0.5) * 130
      }

      positions[i * 3]     = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Color varies by distance from center
      const dist2d = Math.sqrt(x * x + z * z)
      let col
      if (dist2d < 15) {
        col = c3.clone().lerp(c1, Math.random())
      } else if (dist2d < 50) {
        col = c1.clone().lerp(c2, Math.random())
      } else {
        col = c2.clone().lerp(c4, Math.random() * 0.5)
      }

      colors[i * 3]     = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b

      // Vary sizes: most tiny, a few "stars" brighter/larger
      sizes[i] = Math.random() < 0.04
        ? 0.7 + Math.random() * 0.5
        : 0.2 + Math.random() * 0.3
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.42,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    // Secondary sparse bright layer for depth
    const BRIGHT_COUNT = 400
    const bPos = new Float32Array(BRIGHT_COUNT * 3)
    const bCol = new Float32Array(BRIGHT_COUNT * 3)
    for (let i = 0; i < BRIGHT_COUNT; i++) {
      bPos[i * 3]     = (Math.random() - 0.5) * 300
      bPos[i * 3 + 1] = (Math.random() - 0.5) * 300
      bPos[i * 3 + 2] = (Math.random() - 0.5) * 150
      const bc = c3.clone().lerp(c1, Math.random())
      bCol[i * 3]     = bc.r
      bCol[i * 3 + 1] = bc.g
      bCol[i * 3 + 2] = bc.b
    }
    const bGeo = new THREE.BufferGeometry()
    bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3))
    bGeo.setAttribute('color',    new THREE.BufferAttribute(bCol, 3))
    const bMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    })
    const brightLayer = new THREE.Points(bGeo, bMat)
    scene.add(brightLayer)

    const mouse = { x: 0, y: 0 }
    const onMouse = e => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2
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

    let frame, tick = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      tick += 0.00025

      // Galaxy arms rotate slowly
      particles.rotation.y = tick * 0.18
      particles.rotation.x = tick * 0.06

      // Bright stars rotate slightly differently for parallax depth
      brightLayer.rotation.y = tick * 0.10
      brightLayer.rotation.x = -tick * 0.03

      // Camera drifts toward mouse position
      camera.position.x += (mouse.x * 3.5 - camera.position.x) * 0.015
      camera.position.y += (mouse.y * 3.5 - camera.position.y) * 0.015

      // Subtle opacity twinkle on bright layer
      bMat.opacity = 0.38 + Math.sin(tick * 40) * 0.07

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      geo.dispose(); mat.dispose()
      bGeo.dispose(); bMat.dispose()
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

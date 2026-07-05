'use client'

import Spline from '@splinetool/react-spline'
import { useRef, useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

export default function DemoPage() {
  const rafRef = useRef<number>(0)

  const onLoad = useCallback((spline: Application) => {
    const ignore = ['Camera', 'Directional Light', 'Ambient Light', 'Point Light']
    const objects = spline.getAllObjects().filter(o => !ignore.includes(o.name))

    function tick() {
      objects.forEach(o => { o.rotation.y += 0.005 })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <main style={{ width: '800px', height: '800px', overflow: 'hidden', background: 'transparent' }}>
      <Spline
        scene="https://prod.spline.design/3fein39CybMCxX3x/scene.splinecode"
        onLoad={onLoad}
        style={{ background: 'transparent' }}
      />
    </main>
  )
}

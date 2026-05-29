"use client"

import { useEffect, useState } from "react"
import type { DivIcon } from "leaflet"

import { Button } from "@/components/ui/button"
import { education } from "@/lib/portfolio-data"

type MapBundle = {
  MapContainer: typeof import("react-leaflet").MapContainer
  Marker: typeof import("react-leaflet").Marker
  Popup: typeof import("react-leaflet").Popup
  TileLayer: typeof import("react-leaflet").TileLayer
  useMap: typeof import("react-leaflet").useMap
  campusPin: DivIcon
}

function ResizeMap({
  useMap,
}: {
  useMap: typeof import("react-leaflet").useMap
}) {
  const map = useMap()

  useEffect(() => {
    const invalidate = () => map.invalidateSize({ pan: false })
    const container = map.getContainer()
    const observer =
      "ResizeObserver" in window ? new ResizeObserver(invalidate) : null
    const timers = [0, 150, 350, 700, 1200, 2000].map((delay) =>
      window.setTimeout(invalidate, delay),
    )

    observer?.observe(container)
    window.addEventListener("resize", invalidate)
    map.whenReady(invalidate)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      observer?.disconnect()
      window.removeEventListener("resize", invalidate)
    }
  }, [map])

  return null
}

export function EducationMap() {
  const [mapBundle, setMapBundle] = useState<MapBundle | null>(null)
  const [mapKey, setMapKey] = useState(0)

  useEffect(() => {
    let isMounted = true

    async function loadMap() {
      const [{ divIcon }, reactLeaflet] = await Promise.all([
        import("leaflet"),
        import("react-leaflet"),
      ])

      if (!isMounted) {
        return
      }

      setMapBundle({
        MapContainer: reactLeaflet.MapContainer,
        Marker: reactLeaflet.Marker,
        Popup: reactLeaflet.Popup,
        TileLayer: reactLeaflet.TileLayer,
        useMap: reactLeaflet.useMap,
        campusPin: divIcon({
          className: "",
          html: '<div class="relative grid size-10 place-items-center rounded-full border-2 border-background bg-[var(--play-red)] text-white shadow-[0_14px_30px_rgba(234,67,53,0.35)]"><div class="absolute inset-0 rounded-full border border-white/40"></div><div class="grid size-5 place-items-center rounded-full bg-white text-[var(--play-red)] text-[10px] font-bold">CIT</div><div class="absolute -bottom-1 size-3 rotate-45 rounded-[2px] border-b-2 border-r-2 border-background bg-[var(--play-red)]"></div></div>',
          iconSize: [40, 44],
          iconAnchor: [20, 44],
          popupAnchor: [0, -42],
        }),
      })
    }

    loadMap()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMapKey((current) => current + 1)
    }, 250)

    return () => window.clearTimeout(timer)
  }, [])

  const center: [number, number] = [
    education.coordinates.lat,
    education.coordinates.lng,
  ]

  if (!mapBundle) {
    return (
      <div className="grid h-full min-h-80 w-full place-items-center bg-muted/40 p-6 text-center">
        <div>
          <p className="text-sm font-medium">Loading campus map</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Preparing the CIT-U pin and map tiles.
          </p>
        </div>
      </div>
    )
  }

  const { MapContainer, Marker, Popup, TileLayer, useMap, campusPin } =
    mapBundle

  return (
    <MapContainer
      key={mapKey}
      center={center}
      zoom={16}
      scrollWheelZoom={false}
      className="z-0 h-full min-h-80 w-full"
    >
      <ResizeMap useMap={useMap} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={campusPin}>
        <Popup minWidth={240}>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">{education.school}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {education.program}, {education.year}
              </p>
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              A Cebu City university known for engineering, technology, business,
              and innovation.
            </p>
            <Button
              size="sm"
              nativeButton={false}
              render={<a href={education.website} />}
            >
              Visit CIT-U
            </Button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

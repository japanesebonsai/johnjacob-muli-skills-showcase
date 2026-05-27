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
  campusPin: DivIcon
}

export function EducationMap() {
  const [mapBundle, setMapBundle] = useState<MapBundle | null>(null)

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
        campusPin: divIcon({
          className: "",
          html: '<div class="grid size-8 place-items-center rounded-full border-2 border-background bg-foreground text-background shadow-lg"><div class="size-2 rounded-full bg-background"></div></div>',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        }),
      })
    }

    loadMap()

    return () => {
      isMounted = false
    }
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

  const { MapContainer, Marker, Popup, TileLayer, campusPin } = mapBundle

  return (
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full min-h-80 w-full"
    >
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
            <Button size="sm" render={<a href={education.website} />}>
              Visit CIT-U
            </Button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

declare module 'react-simple-maps' {
  import type { ComponentPropsWithoutRef, ReactNode } from 'react'

  export interface RSMContextType {
    projection: (coords: [number, number]) => [number, number] | null
    path: (feature: unknown) => string | null
    width: number
    height: number
  }

  export function useMapContext(): RSMContextType

  export interface ComposableMapProps extends ComponentPropsWithoutRef<'svg'> {
    width?: number
    height?: number
    projection?: string | ((args: unknown) => unknown)
    projectionConfig?: {
      center?: [number, number]
      scale?: number
      rotate?: [number, number, number]
      [key: string]: unknown
    }
  }
  export function ComposableMap(props: ComposableMapProps): JSX.Element

  export interface GeographiesProps {
    geography: string | object
    children: (args: { geographies: GeoFeature[] }) => ReactNode
    [key: string]: unknown
  }
  export function Geographies(props: GeographiesProps): JSX.Element

  export interface GeoFeature {
    rsmKey: string
    properties: Record<string, unknown>
    [key: string]: unknown
  }

  export interface GeographyProps extends ComponentPropsWithoutRef<'path'> {
    geography: GeoFeature
    style?: { default?: object; hover?: object; pressed?: object }
    [key: string]: unknown
  }
  export function Geography(props: GeographyProps): JSX.Element

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    [key: string]: unknown
  }
  export function Marker(props: MarkerProps): JSX.Element
}

export interface pageComponentProps {
  title: string
  children: JSX.Element
  className?: string
}

export type Children = string | JSX.Element | JSX.Element[]
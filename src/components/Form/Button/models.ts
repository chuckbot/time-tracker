export interface IButton {
  label: string
  onClick?: () => void
  variant: "primary" | "outline" | "secondary"
  type: "submit" | "button"
}
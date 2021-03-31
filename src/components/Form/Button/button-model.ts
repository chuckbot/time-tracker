export interface IButton {
  label: string
  onClick?: () => void
  variant: "primary" | "outline"
  type: "submit" | "button"
}
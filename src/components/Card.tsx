export interface CardProps {
  children: React.ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

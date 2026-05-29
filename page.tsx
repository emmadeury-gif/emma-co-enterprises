import PropertyCard from "../../components/PropertyCard"

const properties = [
  { title: "Luxury Villa", location: "Miami", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d" },
  { title: "Sky Apartment", location: "New York", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" }
]

export default function Properties() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, padding: 40 }}>
      {properties.map((p, i) => (
        <PropertyCard key={i} property={p} />
      ))}
    </div>
  )
}

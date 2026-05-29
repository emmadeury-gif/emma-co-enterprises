export default function PropertyCard({ property }) {
  return (
    <div style={{ background: '#111', padding: 20, borderRadius: 12 }}>
      <img src={property.image} style={{ width: '100%', borderRadius: 12 }} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
    </div>
  )
}

import { Calendar, MapPin, Laptop2, Users, Ticket } from 'lucide-react'
import './EventDetails.css'

const icons = {
  calendar: Calendar,
  'map-pin': MapPin,
  'laptop-2': Laptop2,
  users: Users,
  ticket: Ticket,
}

function EventDetails({ data }) {
  return (
    <section className="event-details">
      <div className="container event-details-inner">
        {data.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div className="event-detail" key={item.label}>
              <Icon size={20} className="event-detail-icon" />
              <div>
                <p className="event-detail-label">{item.label}</p>
                <p className="event-detail-value">{item.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EventDetails

import { Share2 } from 'lucide-react'
import './Footer.css'

const icons = {
  instagram: Share2,
  linkedin: Share2,
  youtube: Share2,
}

function Footer({ data, eventName }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{data.copyright}</p>
        <p>{data.madeWith}</p>
        <div className="footer-social">
          <span>Follow Us</span>
          {data.social.map((s) => {
            const Icon = icons[s.platform]
            return (
              <a key={s.platform} href={s.href} aria-label={s.platform}>
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer

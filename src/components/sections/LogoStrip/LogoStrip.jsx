import './LogoStrip.css'
import { SiGoogle, SiSalesforce, SiSlack, SiNotion, SiStripe, SiShopify, SiAtlassian, SiDropbox, SiHubspot, SiGithub, SiZoom, SiFigma, SiSpotify, SiAirbnb } from 'react-icons/si'

const logos = [
  { name: 'Google', Icon: SiGoogle },
  { name: 'Salesforce', Icon: SiSalesforce },
  { name: 'Slack', Icon: SiSlack },
  { name: 'Notion', Icon: SiNotion },
  { name: 'Stripe', Icon: SiStripe },
  { name: 'Shopify', Icon: SiShopify },
  { name: 'Atlassian', Icon: SiAtlassian },
  { name: 'Dropbox', Icon: SiDropbox },
  { name: 'HubSpot', Icon: SiHubspot },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Zoom', Icon: SiZoom },
  { name: 'Figma', Icon: SiFigma },
  { name: 'Spotify', Icon: SiSpotify },
  { name: 'Airbnb', Icon: SiAirbnb },
]

export default function LogoStrip() {
  return (
    <div className="logo-strip">
      <p className="logo-strip-label">Trusted</p>
      <div className="logo-strip-row">
        {logos.map(({ name, Icon }) => (
          <Icon key={name} className="logo-item" title={name} />
        ))}
      </div>
    </div>
  )
}

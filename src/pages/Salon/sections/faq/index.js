import Faq from 'pages/Faq'
import EstFaq from 'pages/Faq/estFaq'

// eslint-disable-next-line react/prop-types
export default function FaqPage ({ color, est }) {
  if (est) {
    return <EstFaq color={color}/>
  }
  return <Faq color={color} />
}

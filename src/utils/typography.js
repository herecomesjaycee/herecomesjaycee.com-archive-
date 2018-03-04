import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  body: {
    backgroundColor: '#2D3042',
    color: '#EAEAEC',
  },

  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
    borderRadius: 20,
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

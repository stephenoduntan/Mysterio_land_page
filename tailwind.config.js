module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['TH3 MACHINE', 'Blue Waffle','Segoe UI', 'Open sans'],
        screen: ['Segoe UI', 'Open sans']
      },
      backgroundImage: theme => ({
        'mysterio' : "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('../img/mysterio.jpg')"
      }),
      gridTemplateRows: {
        'full' : '100%',
        'rows' : '80'
      },
      height: {
        'web' : '-webkit-fill-available'
      },
      maxWidth: {
        'svg-sm' : '3rem',
        'svg-big' : '20rem'
      },
      inset: {
        'cusy' : '200px',
        'cusx' : '180px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

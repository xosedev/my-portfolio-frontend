const styles = {
    codeIconSx: { 
        display: { 
            xs: 'none', 
            md: 'flex' 
        }, 
        mr: 1 
    },
    codeIconSxFull: { display: { xs: 'flex', md: 'none' }, mr: 1 },
    logoNameSx: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    },
    logoNameSxFull:{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      },
    boxContainerSx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
    menuSx: {
        display: { xs: 'block', md: 'none' },
      },
    boxPageContainerSx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    btnPageSxFull: { my: 2, color: 'white', display: 'block' }

} as const;

export default styles
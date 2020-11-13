import { style } from 'typestyle'
export const Color = {
    dark: '#495464',
    while: '#f4f4f2',
    primary: '#e8e8e8',
    secon: '#bbbfca',
    contras: '#2d6187'
}

export const ApliStyle = style({
    backgroundColor: Color.secon,
    padding: '10px',
    width: 'calc(100% - 20px)',
    height: '100%',
    minHeight: 'calc(100vh - 20px)',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridGap: '10px',
    $nest: {
        '& .cont':{
            backgroundColor: Color.while,
            borderRadius: '10px',
            padding: '20px',
            $nest: {
                '& h1': {
                    textAlign: 'center',
                    color: Color.contras
                },
                '& button': {
                    backgroundColor: Color.dark,
                    color: Color.while,
                    borderStyle: 'solid',
                    borderWidth: '0px',
                    padding: '8px 10px',
                    $nest: {
                        '&:hover': {
                            backgroundColor: Color.contras,
                        }
                    }
                },
                '& .list': {
                    display: 'flex',
                    flexDirection: 'column',
                    $nest: {
                        '&.reservation': {
                            marginBottom: '50px',
                            $nest: {
                                '& .item': {
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                } 
                            }
                        },
                        '& .th': {
                            textAlign: 'center',
                            color: Color.contras,
                            fontSize: 20,
                        },
                        '& .item': {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr) 2fr',
                            textAlign: 'center',
                            paddingBottom: '20px', 
                            paddingTop: '10px',
                            borderBottomColor: Color.primary,
                            borderBottomStyle: 'solid',
                            borderBottomWidth: '2px',
                            $nest: {
                                '@media screen and (max-width: 768px)':{
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                }
                            }
                        },
                        '& .contButton': {
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            $nest: {
                                '@media screen and (max-width: 768px)':{
                                    paddingTop: '10px',
                                    gridColumn: '1 / 4'
                                }
                            }
                        }
                    }
                },
                '& .create': {
                    flexDirection: 'column',
                    $nest: {
                        '& button': {
                            width: '100%'
                        }
                    }
                },
                '& .groupInput': {
                    marginBottom: '15px',
                    width: '100%',
                    $nest: {
                        '& div': {
                            color: Color.contras,
                            marginBottom: '10px',
                        },
                        '& input': {
                            borderColor: Color.contras,
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            padding: '5px',
                            borderRadius: '10px',
                            width: 'calc(100% - 10px)',
                            $nest: {
                                '&:disabled': {
                                    cursor: 'no-drop'
                                }
                            }
                        }
                    }
                },
                '& .groupDate': {
                    marginBottom: '15px',
                    width: '100%',
                    $nest: {
                        '& .div': {
                            color: Color.contras,
                            marginBottom: '10px',
                        },
                    }
                }
            }
        },
        '@media screen and (max-width: 700px)': {
            gridTemplateColumns: '1fr',

        }
    }
})
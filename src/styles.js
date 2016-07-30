// Measurements
export const BASE_UNIT = 50

// Colors
const CARIBBEAN_GREEN = '#03C9A9'
const TURQUOISE = '#4ECDC4'
const CALIFORNIA = '#F89406'
const WHITE = '#FFF'
const BLUE_WHITE = '#E4F1FE'
const DARK_GREY = '#444'

const PRIMARY_COLOR = CARIBBEAN_GREEN
const SECONDARY_COLOR = TURQUOISE

const BG_COLOR = PRIMARY_COLOR 
const FG_COLOR = WHITE
const ACCENT_COLOR = CALIFORNIA
export const colors = { BG_COLOR, FG_COLOR, ACCENT_COLOR }

// Font Styles
const BASE_FONT_SIZE = 18
const DEFAULT_TEXT_COLOR = DARK_GREY

export const components = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    toolbar: {
        flex: 1,
        minHeight: BASE_UNIT * 1.25,
        backgroundColor: BG_COLOR,
    },
    content: {
        flex: 8,
        backgroundColor: FG_COLOR,
        padding: BASE_UNIT / 3,
    },
}

export const text = {
    default: {
        fontSize: BASE_FONT_SIZE,
        color: DEFAULT_TEXT_COLOR,
    },
}

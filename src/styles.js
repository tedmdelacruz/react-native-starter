// Measurements
export const BASE_UNIT = 50

// Colors
const CARIBBEAN_GREEN = '#03C9A9'
const TURQUOISE = '#4ECDC4'
const CALIFORNIA = '#F89406'
const WHITE = '#FFF'
const BLUE_WHITE = '#E4F1FE'
const DARK_GREY = '#444'
const GREY = '#888'

const PRIMARY = CARIBBEAN_GREEN
const PRIMARY_ALT = TURQUOISE
const SECONDARY = WHITE
const SECONDARY_ALT = BLUE_WHITE
const ACCENT = CALIFORNIA

export const color = {
    PRIMARY,
    PRIMARY_ALT,
    SECONDARY,
    SECONDARY_ALT,
    ACCENT,
}

// Font Styles
const BASE_FONT_SIZE = 18
const DEFAULT_TEXT_COLOR = DARK_GREY

// Component Styles
export const block = {
    padding: BASE_UNIT / 3
}

export const components = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    toolbar: {
        flex: 1,
        minHeight: BASE_UNIT * 1.25,
        backgroundColor: PRIMARY,
    },
    drawer: {
    },
    content: {
        flex: 8,
        backgroundColor: SECONDARY,
    },
}

export const font = {
    BASE_FONT_SIZE,
    default: {
        fontSize: BASE_FONT_SIZE,
        color: DEFAULT_TEXT_COLOR,
    }
}

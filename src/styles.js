// Measurements
export const BASE_UNIT = 50

// Colors
const CARIBBEAN_GREEN = '#03C9A9'
const TURQUOISE = '#4ECDC4'
const CALIFORNIA = '#F89406'
const WHITE = '#FFF'
const BLUE_WHITE = '#E4F1FE'

const PRIMARY_COLOR = CARIBBEAN_GREEN
const SECONDARY_COLOR = TURQUOISE

const BG_COLOR = PRIMARY_COLOR 
const FG_COLOR = WHITE
const ACCENT_COLOR = CALIFORNIA
export const colors = { BG_COLOR, FG_COLOR, ACCENT_COLOR }

// Font Styles
const BASE_FONT_SIZE = 12

export const styles = {
    toolbar: {
        height: BASE_UNIT * 1.25,
        backgroundColor: BG_COLOR,
    },
    text: {
        default: {
            fontSize: BASE_FONT_SIZE,
            color: FG_COLOR,
        },
    }
}

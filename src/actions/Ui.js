export function hideFlash() {
    return (dispatch) => dispatch({type: 'HIDE_FLASH', result: {type: "success", message: "", data:{} }});
}
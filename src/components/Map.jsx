import {Grid, Typography} from "@material-ui/core";

export const Map = () => {
    return (
        <div>
            <Grid item xs style={{
                backgroundColor: "#73a640",
                color: "white"
            }}>
                <Typography align={"center"} variant={"h6"}>
                    <strong>НАШЕ РОЗТАШУВАННЯ НА КАРТАХ!</strong>
                </Typography>
            </Grid>
            <Grid item xs style={{backgroundColor: "#73a640",}}>
                <iframe title={"our location"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.71728322973!2d23.43081801569005!3d49.30069847933321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a4a369e2e3901%3A0x49cf3f4d6b4def74!2z0LLRg9C70LjRhtGPINCU0YDQvtCz0L7QsdC40YbRjNC60LAsIDUyLCDQkdC-0YDQuNGB0LvQsNCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDgyMzAw!5e0!3m2!1suk!2sua!4v1626203332716!5m2!1suk!2sua"
                        width="100%" height="400" allowFullScreen="" loading="lazy"/>
            </Grid>

        </div>
    )
}
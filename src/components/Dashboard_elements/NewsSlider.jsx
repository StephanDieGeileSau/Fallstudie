import React from 'react'
import ".././fts_style.css"

export default function NewsSlider() {
    return (
        <React.Fragment>
        <div>
            <div class="wrap">
            <header>
                <label for="slide-1-trigger">Slide One</label>
                <label for="slide-2-trigger">Slide Two</label>
                <label for="slide-3-trigger">Slide Three</label>
                <label for="slide-4-trigger">Slide Four</label>
            </header>
            <input id="slide-1-trigger" type="radio" name="slides" checked/>
            <section class="slide slide-one">
                <h1>Headline One</h1>
            </section>
            <input id="slide-2-trigger" type="radio" name="slides"/>
            <section class="slide slide-two">
                <h1>Headline Two</h1>
            </section>
            <input id="slide-3-trigger" type="radio" name="slides"/>
            <section class="slide slide-three">
                <h1>Headline Three</h1>
            </section>
            <input id="slide-4-trigger" type="radio" name="slides"/>
            <section class="slide slide-four">
                <h1>Headline Four</h1>
            </section>
            </div>
        </div>
        </React.Fragment>
    )
}

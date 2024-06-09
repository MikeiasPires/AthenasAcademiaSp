import React, { useState } from "react"
import {ContainerWallpaper,
    TitleMain,
    ButtonStyle,
    StyleMainTitle,
    StyleSecondTitle
} from './style'


export default function CoverTitle() {

    return (
        <>
            <ContainerWallpaper>
                <TitleMain>
                <StyleMainTitle>ACADEMIA</StyleMainTitle>
                <StyleSecondTitle>ATHENAS</StyleSecondTitle>
                <span>"MAIS QUE UMA ARTE MARCIAL, UM ESTILO DE VIDA.</span>
                <span>DESAFIE SEUS LIMITES, LIBERE SUA FORÇA."</span>
                <ButtonStyle>
                    <button>
                        Participe já
                    </button>
                </ButtonStyle>
                </TitleMain>
            </ContainerWallpaper>
        </>
    )
}



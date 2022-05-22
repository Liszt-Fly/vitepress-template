import { PathLike } from "fs-extra"
import { feature } from './feature'
export interface matter_home_structure {
    content: string,
    data: {
        home: boolean,
        heroImage: PathLike,
        heroAlt: string,
        heroText: string,
        tagline: string,
        actionText: string
        actionLink: PathLike,
        features: feature[],
        footer: string
    }
}

export interface home_structure {
    home: boolean,
    heroImage: PathLike,
    heroAlt: string,
    heroText: string,
    tagline: string,
    actionText: string
    actionLink: PathLike,
    features: feature[],
    footer: string
}
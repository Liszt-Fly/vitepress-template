export interface Meta {
    id: string;
    uuid: string;
    sort: string;
    src: string;
    section: string;
    stems: string[];
    offensive: boolean;
}

export interface Sound {
    audio: string;
    ref: string;
    stat: string;
}

export interface Pr {
    mw: string;
    sound: Sound;
}

export interface Hwi {
    hw: string;
    prs: Pr[];
}

export interface Def {
    sseq: any[][][];
}

export interface Uro {
    ure: string;
    fl: string;
}

export interface LdLink {
    link_hw: string;
    link_fl: string;
}

export interface Example {
    t: string;
}

export interface Def2 {
    sls: string[];
    sseq: any[][][];
}

export interface Ldq {
    ldhw: string;
    fl: string;
    def: Def2[];
}

export interface Suppl {
    examples: Example[];
    ldq: Ldq;
}

export interface dict {
    meta: Meta;
    hwi: Hwi;
    fl: string;
    def: Def[];
    uros: Uro[];
    et: string[][];
    date: string;
    ld_link: LdLink;
    suppl: Suppl;
    shortdef: string[];
}




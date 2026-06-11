// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import starlight from '@astrojs/starlight';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [astroExpressiveCode(), mdx(), sitemap(), starlight({
        title: 'nonoise',
    })],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Fredoka',
            cssVariable: '--font-fredoka',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'],
                        weight: '300 700',
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    {
        provider: fontProviders.local(),
        name: 'Doto',
        cssVariable: '--font-doto',
        fallbacks: ['monospace'],
        options: {
            variants: [
                {
                    src: ['./src/assets/fonts/Doto-VariableFont_ROND,wght.ttf'],
                    weight: '100 900',
                    style: 'normal',
                    display: 'swap',
                },
            ],
        },
    },
    {
        provider: fontProviders.local(),
        name: 'Bitcount',
        cssVariable: '--font-bitcount',
        fallbacks: ['monospace'],
        options: {
            variants: [
                {
                    src: ['./src/assets/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf'],
                    weight: '100 900',
                    style: 'normal',
                    display: 'swap',
                },
            ],
        },
    },
    ],
});
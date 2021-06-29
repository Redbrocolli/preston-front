import React from 'react'
import AdSense from 'react-adsense'

export default function GoogleAds() {
    return (
        <div className="container rounded border border-secondary">
            <p className="text-secondary">ADVERTISEMENT</p>
            <AdSense.Google
                client='ca-pub-3297069078081070'
                slot='7806394673'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
        </div>
    )
}
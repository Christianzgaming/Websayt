const channels = {
    pba_rush_hd: {
        name: 'PBA RUSH',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
        type: 'mpd'
    },
    nhers: {
        name: 'STAR TV PHILIPPINES HD',
        url: 'https://1a-1791.com/live/d0t27del/slot-133/h7ws-57lv_1080p/chunklist_DVR.m3u8?fbclid=IwY2xjawF5RhtleHRuA2FlbQIxMAABHU11GuNNGVT_cGTBI-ofYJ9BFpZesbR-6X9n4tLLOS4SXMK-PR0lEhyGYA_aem_SPQPlRkOGpFOorNXOfGuFQ',
        type: 'hls'
    },
};

// Get the channel list container
const channelSelect = document.getElementById('channelSelect');

// Loop through the channels object and create elements
for (const key in channels) {
    if (channels.hasOwnProperty(key)) {
        const channel = channels[key];
        
        // Create a new div for each channel name
        const channelDiv = document.createElement('div');
        channelDiv.className = 'channel-name'; // Apply the CSS class
        channelDiv.innerText = channel.name; // Set the channel name text
        
        // Append the channel div to the channel list
        channelSelect.appendChild(channelDiv);
    }
}
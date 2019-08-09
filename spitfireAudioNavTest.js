module.exports = {
    url: ('https://www.spitfireaudio.com'),
    elements: {
        searchBtn: 'Search',
        searchBar: 'q1',
        playBtn: 'playPause',
        searchBtn: {
            selector: '(//a[@class="palm--hide"])[1]',
            locateStrategy: ('xpath')
        },
        playBtn: {
            selector: '//div[@id="soundmanager-play-sound-3"]',
            locateStrategy: ('xpath')
        },
    }
}
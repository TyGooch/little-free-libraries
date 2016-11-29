# Chicago's Little Free Libraries
[Live Demo][littleFreeLibraries]


## Background
As a demonstration of my abilities with Leaflet, I decided to put together this quick project to visualize the locations of Little Free Libraries highlighted in a past [DNAinfo article][article]. While a map is linked in the article, it is nonspecific to Chicago and requires much effort to view the locations highlighted. The map I created marks the geographic location of 8 Little Free Libraries photographed by DNAinfo reporters. When a marker is clicked, the user is able to view the picture and see the location information provided by the reporter.

## Data Collection
To obtain the coordinates of the highlighted libraries, I matched the approximate location of the library listed by the reporter with an exact location mapped on [LittleFreeLibrary.org's map][map]. However, as mentioned in the article, not all libraries are registered with LittleFreeLibrary.org as was the case with the Glenwood Sculpture Garden and 4700 block of N Rockwell Street locations. In order to obtain an accurate position for these locations, I used Google Maps Street View to find an exact address for the library which I then converted into geo coordinates using another tool.

## Implementation
Once the data was collected, I stored all the needed information as JavaScript objects like the one below.
```javascript
'NR': {
  name: 'Little Free Library',
  info: '4700 block of North Rockwell Street, Lincoln Square',
  imageUrl: 'https://assets.dnainfo.com/generated/chicago_photo/2015/11/lflrockwell-1447790365.jpg/extralarge.jpg',
  lat: 41.966992,
  lon: -87.694072
}
```
Then, using jQuery, I looped through all of the libraries documented and created a marker for one. These markers were then assigned text for their popouts and mapped using Leaflet.

[littleFreeLibraries]: https://tygooch.github.io/little-free-libraries/
[article]: https://www.dnainfo.com/chicago/20151120/lincoln-square/little-free-libraries-are-thing-depending-on-where-you-live
[map]: https://littlefreelibrary.org/ourmap/

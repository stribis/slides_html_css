---
marp: true
theme: gaia
class: invert gaia
paginate: true
---

<!--
_class: lead gaia
-->
# HTML & CSS 

Martin Hutchings 

![width:200px](https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/SAE_Institute_logo_black_no_space.svg/1200px-SAE_Institute_logo_black_no_space.svg.png)

---

# Day Eight

* Video & Audio
* Accessibility
* Dropdown Navigation
* Repetition

---

<!--
_class: lead gaia
-->
# Video

![w:500](https://c.tenor.com/hc_ySixzFpsAAAAM/explosion-action.gif)

---

## Syntax

```html

<video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm">

    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>

```

---

## Codecs

* About : https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs
* Browser Support: https://caniuse.com/?search=video
* About MP4

---

### Attributes

* autoplay
* muted
* controls
* width/height
* loop
* poster
* preload
* src
---

## Audio 

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg">
  <source src="myAudio.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is
     a <a href="myAudio.mp3">link to the audio</a> instead.</p>
</audio>
```

* Codecs https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs

---

<!--
_class: lead gaia
-->
# Accessibility [Barrierefreiheit]

![w:300](https://c.tenor.com/DQgb1bT_0AwAAAAM/fall-down-this-is-happening.gif)


---

## Brainstorming Time

LETS PUT OURSELVES IN PEOPLE'S SHOES ...
- with sensory impairments *[Sinneseinschränkungen]*
- motoric limitations *[motorischen Einschränkungen]*

In which areas do we take measures *[Massnahmen]* for accessibility?

---

### Examples
Light signal with beep / Ramps / Sidewalk markings / Railings / Announcements in train / Volume / Clear and intuitive arrangement of content / Large, high-contrast fonts / Clear, internationally easy-to-understand pictograms / Braille / Sign language / Short mouse path / Spatial accessibility / Languages / Seats / Support / Signage / Color of bus bar / Alarm clock with light / Television with subtitles

---


### Definition
Easy, simple accessibility for all. Consideration for people with limitations.
On the web, in particular:
- Visually impaired and/or blind people
- Hearing impaired and/or deaf - Mobility impaired.

Federal and near-federal websites must be accessible by law

---

For reference: There are recommendations from W3C:
- https://www.w3.org/TR/wai-aria/
- https://www.w3.org/WAI/intro/aria
- https://www.w3.org/Translations/WCAG20-de/
To review:
- http://www.cynthiasays.com/
- Turn off CSS


----

#### Think about the following:

- Tabbing through logical? Otherwise help yourself with attribute `tab-index="number"`.
- `alt` attribute for images
- `title` attribute for links
- Subtitles needed for videos?
- Transcription needed for videos?
- Div with skip links to nav and content, which is offscreen: 
  - ```html
    <div id="access-links">
      <a href="#skip-to-content">to content</a>.
      <a href="#primary-nav">to the main navigation</a> 
    </div>
    ```

---

- Make sure your `alt` attributes are descriptive
- Are your inputs labeled?
- Check the contrast of your text
  - Is the font readable
- Use your devtools
- Use ARIA attributes
- Use a checklist : https://www.a11yproject.com/checklist/

---

<!--
_class: lead gaia
-->
### Dropdown Navigation Demo

---

<!--
_class: lead gaia
-->
### Repetition

---


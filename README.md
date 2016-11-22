# speaker.js
Add speaker buttons/icons easily on your website.

## Install
### using cdn
The simplest way is to load the hosted library through cdn.

```html
<script type="text/javascript" src="https://notsobad-jp.github.io/speakerjs/js/speaker.min.js"></script>
```

### direct install
Or you can download the repository and place `speaker.min.js` into your project directory.

```html
<script src="speaker.min.js" type="text/javascript"></script>
```

## Usage

Simply add `speaker` class to any element you want to make talkable.  
Add `data-text` and `data-lang` for speaker setting.

```html
<span class="speaker" data-text="ここにしゃべらせたい内容を記述" data-lang="ja-JP">ほげほげ</span>
```

We recommend using icon font for speaker icon.  
If you use fontawesome, it must look like this:

```html
<i class="speaker fa fa-volume-up" data-text="hello" data-lang="en-US"></i>
```

Enjoy!

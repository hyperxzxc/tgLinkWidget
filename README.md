

### The most simple use
```html
<script src="https://cdn.jsdelivr.net/gh/hyperxzxc/tgLinkWidget/assets/js/tg.js"></script>
<script>
var tgBtn = new TelegramBtn({tgID: ""});
tgBtn.renderButton()
</script>
```


### <strong>Parameters</strong>
Name|Value type| Default | Required | Description
-|:-:|:-:|:-:|-
tgID | string | Null | yes | tg acc ID
iconColor| string | #fff | no | Color in RGB for the icon
backgroundColor| string | #4DC247 | no | Color for the icon background
callTo | string | Null | no | Text to show with the icon
positionText | string | tl | no | Position of text, check values list
position| string | rb | no | Position of the icon, check value list
style | string | Null | no | Add css styles, example: "bottom:100px;"
width | string | 60 | no | Width of the icon
ga| array | Null | no | Create a Google Analytics event with a array with Label, Category and type, see example
fb| array | Null | no | Create a FB Pixel event with a array with Type and label, see example
pi| array | Null | no | Create a Pinterest event with a array with Type and label, see example

  
### <strong>positionText</strong> values
Text|Result
:-:|-
tt| Text in top of icon
tl| Text in left of icon
tr| Text in right of icon
tb| Text in bottom of icon

### <strong>position</strong> values
Text|Result
:-:|-
lt| Left Top
lc| Left Center
lb| Left Bottom
rt| Right Top
rc| Right Center
rb| Right Bottom

<br>

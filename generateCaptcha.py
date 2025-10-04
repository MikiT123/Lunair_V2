from PIL import Image, ImageDraw, ImageFont
import random
import string

def generate_captcha():
code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
img = Image.new('RGB', (200, 100), color=(30, 30, 30))
d = ImageDraw.Draw(img)
font = ImageFont.truetype("arial.ttf", 48)
d.text((50, 25), code, font=font, fill=(255, 255, 255))
img.save("latest.png")
with open("latest_code.txt", "w") as f:
f.write(code)

generate_captcha()

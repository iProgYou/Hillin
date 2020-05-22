import os
import subprocess

ROOT_DIR = './assets/Player_sprites/walking/right'
for f in [f for f in os.listdir(ROOT_DIR) if f.endswith('.png')]:
    subprocess.check_call(['convert',os.path.join(ROOT_DIR,f),'-flop',os.path.join(ROOT_DIR,f)])

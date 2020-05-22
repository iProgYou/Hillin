import os
import subprocess

ROOT_DIR = './assets/Player_sprites/walking'
for f in [f for f in os.listdir(os.path.join(ROOT_DIR,'right')) if f.endswith('.png')]:
    subprocess.check_call(['convert',os.path.join(ROOT_DIR,'right',f),'-flop',os.path.join(ROOT_DIR,'left',f)])

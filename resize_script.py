import os
import subprocess

ROOT_DIR = './assets/Tiles'
for f in [f for f in os.listdir(ROOT_DIR) if f.endswith('.png')]:
    subprocess.check_call(['convert',os.path.join(ROOT_DIR,f),'-resize','50x50',os.path.join(ROOT_DIR,f'small/resized_{f}')])
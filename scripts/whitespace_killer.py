import os
import sys

import re

filecounter = 0

def main(dir):
    for path in os.listdir(dir):
        cut(os.path.join(dir, path))
    print('I helped you to cut %s lines!' % str(filecounter))

def cut(filepath):
    global filecounter
    prevline = None
    with open(filepath, 'r') as f:
        content = f.readlines()
        f.close()
    with open(filepath, 'w') as f:
        for n in range(1, len(content) - 1):
            if content[n] == '\n':
                if not (re.search('[a-zA-Z]', content[n - 1]) and re.search('[a-zA-Z]', content[n + 1])):
                    content[n] = ''
                    filecounter += 1
        for line in content:
            f.write(line)
        f.close()


if __name__ == "__main__":
    main(sys.argv[1])
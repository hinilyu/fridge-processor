import os

dir_path = r'src/assets/images/ingredients'

list = []

for file_path in os.listdir(dir_path):
    list.append(file_path.split('.')[0])


print(sorted(list))
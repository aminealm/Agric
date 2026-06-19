import os 
path = os.chdir('C:\\Users\\simo2\\Downloads\\kts')
i=0
for file in os.listdir(path):
    new_file_name='{}.jpeg'.format(i)
    os.rename(file,new_file_name)
    i=i+1
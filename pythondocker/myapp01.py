user_name = input("Enter your name: ")
if user_name:
    with open("user_info.txt", "a") as file:
        file.write(user_name + "\n")

    show = input("Do you want to see the list of names? (y/n): ")
    if show.lower() == "y":
        try:
            with open('user_info.txt', 'r') as read_file:
                content = read_file.readlines()
        except Exception as e:
            print(e, type(e))
        else:
            for line in content:
                print(f'{line.rstrip()}')

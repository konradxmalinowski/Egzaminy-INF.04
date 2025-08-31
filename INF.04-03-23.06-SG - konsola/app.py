class Film:
    def __init__(self):
        self.__title = ''
        self.__amount_of_hires = 0    
    
    def get_title(self):
        return self.__title
    
    def set_title(self, newTitle):
        self.__title = newTitle
        
    def get_amount_of_hires(self):
        return self.__amount_of_hires
    
    def increase_amount_of_hires(self):
        self.__amount_of_hires += 1
    
    
film = Film()

print(film.get_title())
print(film.get_amount_of_hires())

film.set_title('new_film')
print(film.get_title())

print(film.get_amount_of_hires())
film.increase_amount_of_hires()
print(film.get_amount_of_hires())
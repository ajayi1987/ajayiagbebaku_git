def fav_foods
	# code for this method goes in here
	food_array = [] # instead of the brackets, you can also use Array.new to make a new empty array
	3.times do
		puts "Name a favorite food."
		food_array << gets.chomp
		p food_array
	food_array.each do |food|
		puts "I like #{food} too!"
	end
end
puts "Your favorite foods are #{food_array.join(", ")}."
end
fav_foods



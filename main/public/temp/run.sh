for f in `ls *.jpg`
do
	filename=$(basename -- "$f")
	extension="${filename##*.}"
	filename="${filename%.*}"
	convert $f "temp.bmp"
	potrace temp.bmp -s
	mv temp.svg "$filename.svg"
done
rm temp.bmp

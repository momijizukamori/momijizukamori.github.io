while IFS=, read -r sword bg fg
for sid in ls
do
    convert -size 300x300 xc:"#ffffff" \( -size 300x300 xc:"#000000" -alpha Set "./$sid/silhouette/Silhouette_1.png"  -compose Dst_In -gravity south -composite \) -compose atop -composite ${sid}_top.png
        convert -size 300x300 xc:"#ffffff" \( -size 300x300 xc:"#000000" -alpha Set "./$sid/silhouette/Silhouette_2.png"  -compose Dst_In -gravity north -composite \) -compose atop -composite ${sid}_bottom.png
done

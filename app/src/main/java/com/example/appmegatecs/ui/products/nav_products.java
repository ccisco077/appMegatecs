package com.example.appmegatecs.ui.products;

import android.os.Bundle;

import androidx.constraintlayout.helper.widget.Carousel;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.appmegatecs.R;
import com.google.android.material.carousel.CarouselLayoutManager;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link nav_products#newInstance} factory method to
 * create an instance of this fragment.
 */
public class nav_products extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public nav_products() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment nav_products.
     */
    // TODO: Rename and change types and number of parameters
    public static nav_products newInstance(String param1, String param2) {
        nav_products fragment = new nav_products();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_nav_products, container, false);
        ArrayList<ImageProducts> images = new ArrayList<>();
        images.add(new ImageProducts("image 1", "https://www.profesionalreview.com/wp-content/uploads/2019/08/AORUS-CV27F-Gaming-Monitor.jpg"));
        images.add(new ImageProducts("image 2", "https://www.profesionalreview.com/wp-content/uploads/2019/08/AORUS-CV27F-Gaming-Monitor.jpg"));
        images.add(new ImageProducts("image 3", "https://www.profesionalreview.com/wp-content/uploads/2019/08/AORUS-CV27F-Gaming-Monitor.jpg"));
        images.add(new ImageProducts("image 4", "https://www.profesionalreview.com/wp-content/uploads/2019/08/AORUS-CV27F-Gaming-Monitor.jpg"));
        images.add(new ImageProducts("image 5", "https://www.profesionalreview.com/wp-content/uploads/2019/08/AORUS-CV27F-Gaming-Monitor.jpg"));
        CustomAdapter customAdapter = new CustomAdapter(images);

        RecyclerView carouselRecyclerView = rootView.findViewById(R.id.recyclerImgProducts);
        carouselRecyclerView.setLayoutManager(new CarouselLayoutManager());
        carouselRecyclerView.setAdapter(customAdapter);
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_nav_products, container, false);
    }
}
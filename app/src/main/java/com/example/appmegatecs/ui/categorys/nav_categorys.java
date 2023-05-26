package com.example.appmegatecs.ui.categorys;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.fragment.app.Fragment;

import com.example.appmegatecs.R;
import com.squareup.picasso.Picasso;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link nav_categorys#newInstance} factory method to
 * create an instance of this fragment.
 */
public class nav_categorys extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public nav_categorys() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment nav_categorys.
     */
    // TODO: Rename and change types and number of parameters
    public static nav_categorys newInstance(String param1, String param2) {
        nav_categorys fragment = new nav_categorys();
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
        // Inflar el diseño del Fragment
        View rootView = inflater.inflate(R.layout.fragment_nav_categorys, container, false);
        // Buscar una vista por su ID
        ImageView imgScreen, imgComputer, imgLaptop, imgPrint, imgComponent, imgCamera;
        imgScreen = rootView.findViewById(R.id.imgScreen);
        imgComputer = rootView.findViewById(R.id.imgComputer);
        imgLaptop = rootView.findViewById(R.id.imgLaptop);
        imgPrint = rootView.findViewById(R.id.imgPrint);
        imgComponent = rootView.findViewById(R.id.imgComponent);
        imgCamera = rootView.findViewById(R.id.imgCamera);
        Picasso.get().load("https://www.profesionalreview.com/wp-content/uploads/2019/08/AORUS-CV27F-Gaming-Monitor.jpg").into(imgScreen);
        Picasso.get().load("https://dpq25p1ucac70.cloudfront.net/seller-place-files/mrkl-files/1270/ELECTROHOGAR/PC-COMPLETA-GENERAL_004236299581_2.jpeg").into(imgComputer);
        Picasso.get().load("https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/plp/laptops/d14-amd-2021.jpg").into(imgLaptop);
        Picasso.get().load("https://home.ripley.com.pe/Attachment/WOP_5/2004284438953/2004284438953_2.jpg").into(imgPrint);
        Picasso.get().load("https://4.bp.blogspot.com/-4BkfHH8F6eQ/XET5YtmKGfI/AAAAAAAAHc8/PQA8DuOier8FYwi7pyRDJrRZ8O8eE0uTQCLcBGAs/s1600/PC.jpg").into(imgComponent);
        Picasso.get().load("https://www.macrotel.com.pe/a/di/s_8a9fc539-e429-43a9-a3d9-3518cbea9c31.jpg?rutaConfig=folder.producto").into(imgCamera);

        // Devolver la vista modificada
        return rootView;
    }

}
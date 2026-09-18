package com.workintech.ecommercebackend.service;

import com.workintech.ecommercebackend.entity.Address;
import com.workintech.ecommercebackend.entity.User;
import com.workintech.ecommercebackend.repository.AddressRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    private final AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public List<Address> getUserAddresses(User user) {
        return addressRepository.findByUser(user);
    }

    public Address addAddress(Address address, User user) {
        address.setId(null);
        address.setUser(user);

        return addressRepository.save(address);
    }

    public Address updateAddress(
            Address address,
            User user
    ) {
        Address existingAddress =
                addressRepository.findById(address.getId())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Adres bulunamadı."
                                )
                        );

        if (!existingAddress.getUser().getId()
                .equals(user.getId())) {

            throw new RuntimeException(
                    "Bu adres size ait değil."
            );
        }

        existingAddress.setTitle(address.getTitle());
        existingAddress.setName(address.getName());
        existingAddress.setSurname(address.getSurname());
        existingAddress.setPhone(address.getPhone());
        existingAddress.setCity(address.getCity());
        existingAddress.setDistrict(address.getDistrict());
        existingAddress.setNeighborhood(
                address.getNeighborhood()
        );
        existingAddress.setAddress(address.getAddress());

        return addressRepository.save(existingAddress);
    }

    public void deleteAddress(
            Integer addressId,
            User user
    ) {
        Address address =
                addressRepository.findById(addressId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Adres bulunamadı."
                                )
                        );

        if (!address.getUser().getId()
                .equals(user.getId())) {

            throw new RuntimeException(
                    "Bu adres size ait değil."
            );
        }

        addressRepository.delete(address);
    }
}